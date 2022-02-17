"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMainConfig = exports.SET_MAIN_CONFIG = exports.setRendererRect = exports.SET_RENDERER_RECT = exports.updateCurrentDocument = exports.UPDATE_CURRENT_DOCUMENT = exports.previousDocument = exports.PREVIOUS_DOCUMENT = exports.nextDocument = exports.NEXT_DOCUMENT = exports.setDocumentLoading = exports.SET_DOCUMENT_LOADING = exports.setAllDocuments = exports.SET_ALL_DOCUMENTS = void 0;
// SET_DOCUMENTS
exports.SET_ALL_DOCUMENTS = "SET_ALL_DOCUMENTS";
var setAllDocuments = function (documents) { return ({
    type: exports.SET_ALL_DOCUMENTS,
    documents: documents,
}); };
exports.setAllDocuments = setAllDocuments;
// SET_DOCUMENT_LOADING
exports.SET_DOCUMENT_LOADING = "SET_DOCUMENT_LOADING";
var setDocumentLoading = function (value) { return ({
    type: exports.SET_DOCUMENT_LOADING,
    value: value,
}); };
exports.setDocumentLoading = setDocumentLoading;
// NEXT_DOCUMENT
exports.NEXT_DOCUMENT = "NEXT_DOCUMENT";
var nextDocument = function () { return ({ type: exports.NEXT_DOCUMENT }); };
exports.nextDocument = nextDocument;
// PREVIOUS_DOCUMENT
exports.PREVIOUS_DOCUMENT = "PREVIOUS_DOCUMENT";
var previousDocument = function () { return ({
    type: exports.PREVIOUS_DOCUMENT,
}); };
exports.previousDocument = previousDocument;
// UPDATE_CURRENT_DOCUMENT
exports.UPDATE_CURRENT_DOCUMENT = "UPDATE_CURRENT_DOCUMENT";
var updateCurrentDocument = function (document) { return ({ type: exports.UPDATE_CURRENT_DOCUMENT, document: document }); };
exports.updateCurrentDocument = updateCurrentDocument;
// SET_RENDERER_RECT
exports.SET_RENDERER_RECT = "SET_RENDERER_RECT";
var setRendererRect = function (rect) { return ({
    type: exports.SET_RENDERER_RECT,
    rect: rect,
}); };
exports.setRendererRect = setRendererRect;
// SET_MAIN_CONFIG
exports.SET_MAIN_CONFIG = "SET_MAIN_CONFIG";
var setMainConfig = function (config) { return ({
    type: exports.SET_MAIN_CONFIG,
    config: config,
}); };
exports.setMainConfig = setMainConfig;
