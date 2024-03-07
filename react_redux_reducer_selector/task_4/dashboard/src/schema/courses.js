import { normalize, schema } from 'normalizr';

// Define a courses schema
const courses = new schema.Entity('courses');

// 生のcourseデータを引数として受け取り、normalizrを使用して正規化したデータを返す
export const coursesNormalizer = (data) => {
  // 複数のコースデータがあるので、スキーマエンティティの配列[courses]を使用
  return normalize(data, [courses]);
};
