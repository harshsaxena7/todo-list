import Task from './models/tasks-model.js';
import Tasks from './models/tasks-model.js';

const create = async (req, res) => {
    const task = new Tasks(req.body);
    try {
        await task.save();
        return res.status(200).json({
          message: "Successfully task added"
        });
    }

    catch(e){
        return res.status(400).json({
            error: 'Error while saving task'
        });
    }
}

const removeAll = async (req, res) => {
    try {
        await Tasks.deleteMany();
        return res.status(200).json({
            message: "Successfully removed all the tasks!"
        });

    } catch (error) {
        return res.status(400).json({
            error: 'Error while deleting task'
        });        
    }
}

const queryTask = async (req, res) => {
    try {
        let qp = req.query;
        let p = req.params;
        let doc = await Tasks.find({"priority": qp.priority, "category": p.category})
        return res.status(200).json(doc);
        
    } catch (error) {
        return res.status(400).json({
            error: 'Error while quering  task'
        });           
    }
}

const taskByID = async (req, res) => {

    try {
        let p = req.params;
        let doc = await Task.find({"task_id": p.taskID});
        return res.status(200).json(doc);
    } catch (error) {
        return res.status(400).json({
            error: 'Error while quering  task by ID'
        });          
    }
}

const getTaskByID = async (req, res, next) => {
    try {
        let p = req.params;
        req.task = await Task.findOne({"task_id": p.taskID});
        next();
    } catch (error) {
        return res.status('400').json({
            error: "Could not retrieve task"
        })        
    }
};

const removeTaskByID = async (req, res) => {
    try {
        let taskDoc = req.task;
        let deletedTask = await taskDoc.remove();  
        res.json(deletedTask)     
    } catch (error) {
        return res.status(400).json({
            error: "Error while deleting task"
        })        
    }
}

const updateTaskByID = async (req, res) => {
    try {
        let body = req.body;
        let taskDoc = req.task;
        let updatedDoc = await Task.findOneAndUpdate( { "task_id": taskDoc.task_id}, { ...body }, { new: true });
        res.json(updatedDoc);
    } catch (error) {
        return res.status(400).json({
            error: "Error while updating task"
        })         
    }
}

const replaceTaskByID = async (req, res) => {
    try {
        let body = req.body;
        let id = req.task.id;

        console.log(id);
        let newDOc = await new Task(body)
        await newDOc.validate();
        console.log(newDOc)
        let newDocClone = newDOc.toObject();
        console.log(newDocClone);
        delete newDocClone._id;
        console.log(newDocClone);
        let updatedDoc = await Task.findOneAndReplace( { "_id": id}, newDocClone, { new: true, strict: true });
        res.json(updatedDoc);
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error: "Error while replacing task"
        })            
    }
}


export default {
    create,
    removeAll,
    queryTask,
    taskByID,
    removeTaskByID,
    updateTaskByID,
    replaceTaskByID, 
    getTaskByID   
}