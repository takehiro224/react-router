// container
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, deleteTask } from '../actions/tasks';

function mapStateToProps({ task, tasks }) {
  return {
    task,
    tasks
  };
}

function mapDispatchToProps(dispatch) {
  return (
    //inputTask: (task) => dispatch(inputTask(task)),
    //addTask: (task) => dispatch(addTask(task))
    bindActionCreators({
      inputTask,
      addTask,
      deleteTask
    }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
