import { Router } from "express";
import { addEvent, allEvents, deleteEvent, getEventById, updateEvent } from "../controllers/event-controller.js";

const eventsRouter = Router()

eventsRouter.post('/events', addEvent);

eventsRouter.get('/events', allEvents);

eventsRouter.patch('/events/:id', updateEvent);

eventsRouter.delete('/events/:id', deleteEvent);

eventsRouter.get('/events/:id', getEventById);

export default eventsRouter;

