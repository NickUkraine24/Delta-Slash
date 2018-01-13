function onReady() {
  var vid = document.querySelector('#inputVideo');

  cameraSource.start({
    videoElement: vid,
    constraints: {
      video: true,
      facingMode: "environment"
    },
    callback: function() {

      var scene = document.querySelector('#aScene');
      var aobj = document.createElement('a-obj-model');
      aobj.setAttribute('id', 'coin');
      aobj.setAttribute('src', '#coin-obj');
      aobj.setAttribute('position', '0 -800 -4000');
      aobj.setAttribute('rotation', '210 -120 180');
      aobj.setAttribute('scale', '8 8 8');
      aobj.setAttribute('material', 'color: yellow');
      scene.appendChild(aobj);
      
    }
  });
}

document.addEventListener('DOMContentLoaded', onReady);
