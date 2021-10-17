import Env from './env'
import * as THREE from 'three'
import vertexShader from './shaders/mask/vertex.glsl'
import fragmentShader from './shaders/mask/fragment.glsl'

export default class Mask {
  
  constructor() {
    this.env = new Env()
    this.scene = this.env.scene
    this.camera = this.env.camera
    this.progress = 0
    this._setGeometry()
    this._setMaterial()
    this._setMesh()
  }

  _setGeometry() {
    this.geometry = new THREE.PlaneGeometry(10, 5, 20, 20)
  }

  _setMaterial() {
    this.uniforms = {
      uTexture: {
        value: new THREE.TextureLoader().load('textures/01.jpg')
      },
      uMaskTexture: {
        value: new THREE.TextureLoader().load('textures/mask.jpg')
      },
      uProgress: {
        value: 0
      }
    }
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      vertexShader,
      fragmentShader
    })
  }

  _setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)
  }

  update() {
    this.progress = (this.progress + 0.01) % 1
    this.material.uniforms.uProgress.value = this.progress
  }
  
}

