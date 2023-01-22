const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name."],
      trim: true,
      unique: true,
      // maxLength: [20, 'A product name must not exceed 20 characters.'],
    },
    slug: {
      type: String,
    },
    trips: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    host: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A Product must by created by a user."],
    },
    type: {
      type: String,
      trim: true,
      required: [true, "A Product must have a type."],
      enum: {
        values: [
          "Shirt",
          "Pants",
          "Dress",
          "Shoes",
          "Sports",
          "Pajamas",
          "Jacket",
        ],
        message: "A Product must have a certain type.",
      },
    },
    brand: {
      type: String,
      // required: [true, "A Product must have a type."],
    },
    size: {
      type: String,
      required: [true, "A Product must have a size."],
      enum: {
        values: ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
      },
      default: "Medium",
    },
    activity: {
      type: String,
      enum: {
        values: ["Sport", "Formal", "Casual", "Outdoors", "Winter"],
      },
      default: "Casual",
    },
    pockets: {
      type: Boolean,
      default: false,
    },
    image: String,
    description: String,
    features: {
      type: [String],
    },
    discount: String,
    price: Number,
    ratingsQuantity: Number,
    ratingsAverage: Number,
    // reviews: {
    //   type: [
    //     {
    //       type: mongoose.Schema.ObjectId,
    //       ref: "Review",
    //     },
    //   ],
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// productSchema.virtual('durationWeeks').get(() => 6);

productSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "Product",
  localField: "_id",
});

// productSchema.pre(/^find/, async function (next) {
//   this.populate({
//     path: "host",
//     select: 'firstName lastName trips rating summary createdAt -Product',
//   });
//   next();
// });

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  // this.recipe.forEach(function (ing) {
  //   return (ing.slug = slugify(ing.ingredient, {
  //     lower: true,
  //   }));
  // });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
