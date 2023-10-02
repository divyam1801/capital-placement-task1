const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3100;

// Connect to MongoDB (adjust the connection string accordingly)
mongoose.connect('mongodb+srv://divyam:divyam@cluster0.oqaya2c.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define MongoDB schemas and models (for the data structure)
const ApplicationFormSchema = new mongoose.Schema({
    id: String,
    type: String,
    attributes: {
        coverImage: String,
        personalInformation: {
            firstName: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            lastName: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            emailId: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            phoneNumber: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            nationality: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            currentResidence: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            idNumber: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            dateOfBirth: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
            gender: {
                internalUse: {
                    type: Boolean,
                    default: false
                },
                show: {
                    type: Boolean,
                    default: true
                },
            },
        },
        profile: {
            education: String,
            experience: String,
            resume: String,
            profileQuestions: [
                {
                    mandatory: { type: Boolean, default: true },
                    show: { type: Boolean, default: true },
                },
            ],
        },
        customisedQuestions: [
            {
                id: { type: String, default: uuidv4 },
                type: String,
                question: String,
                choices: [String], // Adjust the type as needed
                maxChoice: Number,
                disqualify: { type: Boolean, default: false },
                other: { type: Boolean, default: false },
            },
        ],
    },
});

const ApplicationForm = mongoose.model('ApplicationForm', ApplicationFormSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes

// Get application form by programId and version
app.get('/api/:version/programs/:programId/application-form', async (req, res) => {
    const { programId, version } = req.params;

    try {
        const applicationForm = await ApplicationForm.findOne({ id: programId });

        if (!applicationForm) {
            return res.status(404).json({ error: 'Application form not found' });
        }

        res.status(200).json(applicationForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update or create application form by programId and version
app.put('/api/:version/programs/:programId/application-form', async (req, res) => {
    const { programId, version } = req.params;
    const { body } = req;

    try {
        const existingForm = await ApplicationForm.findOne({ id: programId });

        if (existingForm) {
            // Update the existing form
            await ApplicationForm.updateOne({ id: programId }, body);
            res.status(204).send();
        } else {
            // Create a new form
            const newForm = new ApplicationForm({ ...body, id: programId });
            await newForm.save();
            res.status(201).send();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});