import mongoose, { model, models, Schema } from "mongoose";

const intructorSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  academicRank: { type: String, required: true },
});

// Model cho Class Topic
const topicSchema = new Schema(
  {
    // Tên tiếng Việt
    vietnameseName: { type: String, required: true },
    // Tên tiếng Anh
    englishName: { type: String, required: true },
    // Loại đề tài - Nghiên cứu cơ bản
    type: { type: String },
    // Tóm tắt đề tài
    summary: { type: String, required: true },
    // Tham khảo đề tài
    reference: { type: [String], required: true },
    // Kết quả dự đoán
    expectedResult: { type: String, required: true },
    // Danh sách thành viên
    participants: { type: [String], required: true },
    // Trạng thái đánh giá đề tài: Chưa đánh giá | Đã đánh giá
    isReviewed: { type: Boolean, default: false, required: true },
    // Danh sách kết quả kiểm duyệt
    reviews: { type: [mongoose.SchemaTypes.ObjectId] },
    // Trạng thái kiểm duyệt: Chưa kiểm duyệt | Đã kiểm duyệt
    isAppraised: { type: Boolean, default: false, required: true },
    // Danh sách kết quả nghiệm thu
    appraises: { type: [mongoose.SchemaTypes.ObjectId] },
    // fileRef
    fileRef: { type: String, default: null },
    // Chủ sở hữu đề tài
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Student",
      required: true,
    },
    // GVHD
    instructor: intructorSchema,
  },
  {
    timestamps: true,
  }
);

export const Topic = models?.Topic || model("Topic", topicSchema);
