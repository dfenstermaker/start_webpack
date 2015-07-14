import {_module} from './module'
import imageViewerTemplate from './imageViewerTemplate.html'
import imageViewerController from './imageViewer.controller'

_module.directive('imageViewer',  () => {

    return {

        restrict: "AE",
        require : ['ngModel', 'imageViewer'],
        template: imageViewerTemplate,
        replace : true,
        scope   : {
            url: '=ngModel'
        },

        bindToController: true,
        controllerAs    : 'imageViewer',
        controller: imageViewerController.factory,
        link  (scope, el, attrs, [ngModel, imageViewer]) {

            let canvas        = el[0].querySelector('canvas')
            let ctx           = canvas.getContext('2d')
            let originalImage = null

            var getImageData = () => {
                return ctx.getImageData(0,0,canvas.width, canvas.height)
            }

            var drawImage = (img) => ctx.drawImage(img, 0, 0, 300, 150)

            var applyImageFilter = (img) => {
                ctx.putImageData(img, 0, 0)
            }

            scope.makeImageGrayscale = () => {
                applyImageFilter(imageViewer.grayscaleImage(getImageData()))
            }

            scope.reset = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                drawImage(originalImage)
            }

            scope.makeImageInverted = () => {
                applyImageFilter(imageViewer.invertImage(getImageData()))
            }

            ngModel.$render = () => {

                imageViewer
                    .createImage(imageViewer.url)
                    .then( (img) => {
                        originalImage = img
                        drawImage(img)
                    })
            }
        }
    }

})
