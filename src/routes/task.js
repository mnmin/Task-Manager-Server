import { Router } from "express";
import {
  createNewTask,
  getAllTasks,
  getTaskByUserId,
  getAllTasksByUserIdAndPriority,
  updateTaskById,
  deleteTaskById,
  createCheckListItem,
  deleteCheckListItemById,
} from "../controllers/task.js";
import { authentication } from "../middleware/authentication.js";

const router = Router();

router.post("/", authentication, createNewTask);
router.get("/", authentication, getAllTasks);
router.get(
  "/:id/priorityOrder/:priorityOrder/priorityValues/:priorityValues/statusValues/:statusValues",
  authentication,
  getAllTasksByUserIdAndPriority
);
router.get("/:id", authentication, getTaskByUserId);
router.patch("/:id", authentication, updateTaskById);
router.delete("/:id", authentication, deleteTaskById);

router.post("/:taskId/checkList", authentication, createCheckListItem);
// router.get("/:taskId/", authentication, getAllChecklistItems);
router.delete(
  "/:taskId/checkList/:checkListId",
  authentication,
  deleteCheckListItemById
);

export default router;
