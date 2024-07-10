import { EventsModel } from "../models/event-model.js";

// Get Events

export const addEvent = async (req, res) => {
    try {
        console.log(req.body)
        const addEvent = await EventsModel.create({
            ...req.body,
            banner: req.file.filename
        });
        res.status(200).send(addEvent);
    
    } catch (error) {
        console.log(error)
    }
    };

    // get all events
    export const allEvents = async (req, res) => {
        try {
            console.log( req.body)
            const getEvents = await EventsModel.find();
            res.status(200).send(getEvents)
            
        } catch (error) {
            console.log(error)
            
        }
    };

    // get one event
    export const getEventById = async (req, res) => {
        try {
            const eventId = req.params.id;
            const event = await EventsModel.findById(eventId);
            res.status(200).send(event);
        } catch (error) {
            console.log(error)
        }
    };
    
    // update status of a event
    export const updateEvent = async (req, res) => {
        try {
            const status = req.body.eventStatus
            console.log(status)
            const updateData = await EventsModel.findByIdAndUpdate(req.params.id, {eventStatus: status},
            {new: true}
            );
            res.status(200).send(updateData);
        
        } catch (error) {
            console.log(error)
        }
        };

// delete a event
export const deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await EventsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedEvent)
    } catch (error) {
        console.log(error)
        
    }
}