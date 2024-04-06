const express = require("express");
const app = express();
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

const addTwoNumber = (n1, n2) => {
    return n1 + n2;
};

const subTwoNumber = (n1, n2) => {
    return n1 - n2;
};

const mulTwoNumber = (n1, n2) => {
    return n1 * n2;
};

const divTwoNumber = (n1, n2) => {
    return n1 / n2;
};

const exponent = (n1, n2) => {
    return Math.pow(n1, n2);
};
const squareRoot = (n1) => {
    return Math.sqrt(n1);
};
const modulo = (n1, n2) => {
    return n1 % n2;
};

app.get("/addTwoNumber", (req, res) => {
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
        
        logger.info('Parameters '+n1+' and '+n2+' received for addition');
        const result = addTwoNumber(n1,n2);
        res.status(200).json({statuscocde:200, data: result }); 
        } catch(error) { 
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});

app.get("/subTwoNumber", (req, res) => {
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
        
        logger.info('Parameters '+n1+' and '+n2+' received for subtraction');
        const result = subTwoNumber(n1,n2);
        res.status(200).json({statuscocde:200, data: result }); 
        } catch(error) { 
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});

app.get("/mulTwoNumber", (req, res) => {
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
        
        logger.info('Parameters '+n1+' and '+n2+' received for multiplication');
        const result = mulTwoNumber(n1,n2);
        res.status(200).json({statuscocde:200, data: result }); 
        } catch(error) { 
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});

app.get("/divTwoNumber", (req, res) => {
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
        
        logger.info('Parameters '+n1+' and '+n2+' received for division');
        const result = divTwoNumber(n1,n2);
        res.status(200).json({statuscocde:200, data: result }); 
        } catch(error) { 
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});

app.get("/exponent", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for exponentiation');
        const result = exponent(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});
app.get("/squareRoot", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        if (isNaN(n1)) {
            logger.error("Number is incorrectly defined");
            throw new Error("Number incorrectly defined");
        }
        logger.info('Parameter ' + n1 + ' received for square root calculation');
        const result = squareRoot(n1);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});
app.get("/modulo", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2) || n2 === 0) {
            logger.error("Invalid parameters for modulo operation");
            throw new Error("Invalid parameters for modulo operation");
        }
        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for modulo operation');
        const result = modulo(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});


const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
