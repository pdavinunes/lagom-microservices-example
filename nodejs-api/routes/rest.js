const express = require('express');
const BusesController = require('../controllers/buses');
const StopsController = require('../controllers/stops');
const HomeController = require('../controllers/home');
const ApiController = require('../controllers/api');

module.exports = app => {
    const APIRouter = new express.Router();

    APIRouter.get('/buses-lines/search', BusesController.searchLines);
    APIRouter.get('/buses-lines', BusesController.getBusesLines);
    APIRouter.get('/trip/:line/:direction', BusesController.getTripByLineAndDirection);
    APIRouter.get('/buses-stops/within-circle/:coordinates/:radius', StopsController.getStopsWithinCircle);
    APIRouter.get('/buses-stops/previsions/:stopId', StopsController.getStopPrevisions);
    APIRouter.get('/buses-stops/:line/:direction', StopsController.getStopsByLineAndDirection);
    APIRouter.get('/buses', BusesController.getAllBuses);

    app.use('/api/sp', APIRouter);
    app.get('/api/sp/sptrans-version', ApiController.getApiVersion);
    app.get('/*', HomeController.getHomePage);
};