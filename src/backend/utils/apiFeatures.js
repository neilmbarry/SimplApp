module.exports = class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };

    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    if (queryObj.name) {
      queryObj.name = { $regex: `.*${queryObj.name}.*`, $options: "i" };
    }

    if (queryObj.size) {
      const sizes = queryObj.size.split(",");
      queryObj.size = { $in: sizes };
    }
    if (queryObj.brand) {
      const brands = queryObj.brand.split(",");
      queryObj.brand = { $in: brands };
    }
    if (queryObj.type) {
      const types = queryObj.type.split(",");
      queryObj.type = { $in: types };
    }
    if (queryObj.activity) {
      const activities = queryObj.activity.split(",");
      queryObj.activity = { $in: activities };
    }

    let queryString = JSON.stringify(queryObj);

 

    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort;
      if (sortBy === "rating") {
        this.query = this.query.sort("-ratingsAverage -ratingsQuantity");
      }
      if (sortBy === "-rating") {
        this.query = this.query.sort("ratingsAverage ratingsQuantity");
      }
      if (sortBy === "newest") {
        this.query = this.query.sort("-createdAt");
      }
      if (sortBy === "-newest") {
        this.query = this.query.sort("createdAt");
      }
      if (sortBy === "-price") {
        this.query = this.query.sort("price");
      }
      if (sortBy === "price") {
        this.query = this.query.sort("-price");
      }
    } else {
      this.query = this.query.sort("name");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 1000;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
};
