import * as THREE from 'three'
import './style.css'

// Сцена
const scene = new THREE.Scene()
// Объект и его геометрия и материал
const geometry = new THREE.BoxGeometry(1,1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'purple', wireframe:true})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
// Размеры сцены и отрисовщика
const size = {
    width: 600,
    height: 600
}
// Камера и её позиция
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera)

// Создади объект отрисовщика и укажим размер
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.canvas-js')
});
renderer.setSize(size.width, size.height)

// Отрисовка осей
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)


// Передвижение куба
mesh.position.set(-1, -0.8, 0.4)

// Масштабирование куба
mesh.scale.set(0.5, 2, 0.7)

// Вращение куба
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// Позиция камеры
// camera.lookAt( new THREE.Vector3(0, -1, 0))
// camera.lookAt( mesh.position)

renderer.render(scene, camera)


// // длина вектора
// console.log(mesh.position.length());
// // длина вектора до камеры
// console.log(mesh.position.distanceTo(camera.position));
// // уменьшить длину вектора до 1, но оставить направление
// console.log(mesh.position.normalize());