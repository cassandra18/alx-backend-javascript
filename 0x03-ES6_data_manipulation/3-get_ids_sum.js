export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.map((student) => student.id).reduce((a, b) => a + b, 0);
}
