export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // The inner block-scoped variables are unnecessary and can be removed
  }

  return [task, task2];
}
