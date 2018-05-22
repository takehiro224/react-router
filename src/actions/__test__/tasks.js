import actions from './tasks';


describe('Actions', () => {
  test('addTask Action', () => {
    const task = 'kaimono';
    const result = actions.addTask(task);
    const expected = {
      type: 'ADD_TASK',
      payload: {
        task,
      },
    };
    expect(result).toEqual(expected);
  })
});
