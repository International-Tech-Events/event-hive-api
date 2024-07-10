import { collegeModel } from "../models/college-model.js";

export const getCollege = async (req, res) => {
    try {
        console.log('request', req);
        const college = await collegeModel.find();
        res.status(200).json(college); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

export const postCollege = async (req, res) => {
    try {
        console.log('request', req)
        const postcollege = await collegeModel.create(req.body)
        res.status(200).json(postcollege);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
};

export const getACollege = async (req, res) => {
    try {
        console.log('request', req.body)
        const getcollegeId = await collegeModel.findById(req.params.id)
        res.json(getcollegeId);

} catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' }); 

    }
}

export const updateCollege = async (req,res) => {
    try {
        const status = req.body.caseStatus;
        console.log('request', req.status)
        const updatecollegId = await collegeModel.findByIdAndUpdate(req.params.id,{caseStatus: status});
        res.json(updatecollegId);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' }); 

    }
}

export const deleteCollege = async (req, res) => {
    try {
        const collegeId = req.params.id;
        console.log('Deleting college with ID:', collegeId);

        const deletedcollege = await collegeModel.findByIdAndDelete(collegeId);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' }); 

    }
}

