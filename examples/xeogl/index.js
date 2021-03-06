var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    modelInfo = TutorialModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var scale = modelInfo.scale;

// Load glTF
var model = new xeogl.GLTFModel({
    //src: "../../sampleModels/" + modelInfo.path
    src: "../../" + modelInfo.category + "/" + modelInfo.path
});

var view = model.scene.camera.view;
if (modelInfo.name == "GearboxAssy" ) {
    view.eye = [184.21, 10.54, -7.03];
    view.look = [159.20, 17.02, 3.21];
    view.up = [-0.15, 0.97, 0.13];
} else {
    view.eye = [
        0.0,
        0.0,
        -3.0 * (1/scale)
    ];
    view.look = [
        0.0,
        0.0,
        0.0
    ];
    view.up = [
        0.0,
        1.0,
        0.0
    ];
}
 
new xeogl.CameraControl();
model.scene.on("tick",
    function () {
        view.rotateEyeY(1.0);
        //view.rotateEyeX(1.0);
    });
