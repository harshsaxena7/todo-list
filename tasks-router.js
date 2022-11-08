import express from 'express'
import taskCtrl from './tasks-controller.js';


const router = express.Router()

router.route('/api/tasks')
  .post(taskCtrl.create)
  .delete(taskCtrl.removeAll)

router.route('/api/tasks')
  .get(taskCtrl.queryTask)  


  

  router.route('/api/task/:taskID')
  .get(taskCtrl.taskByID)    
  .delete(taskCtrl.removeTaskByID)
  .patch(taskCtrl.updateTaskByID)
  .put(taskCtrl.replaceTaskByID)


  router.param('taskID', taskCtrl.getTaskByID)

export default router