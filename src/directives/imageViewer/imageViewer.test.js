import ImageViewerController from './imageViewer.controller'

describe("test controller", function() {

  var controller;
  beforeEach(function () {
      controller = new ImageViewerController();
  });

  it("should return true", function() {
    expect(controller.hasTruthyValue()).toBe(true);
  });

});
