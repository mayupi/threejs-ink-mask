varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;
uniform float uProgress;


void main() {
  vec4 tex = texture2D(uTexture, vUv);
  vec4 maskTex = texture2D(uMaskTexture, vUv);
  
  float alpha = clamp(maskTex.r - (1.0 - uProgress), 0.0, 1.0);
  alpha = smoothstep(0.0, 0.0001, alpha);

  vec4 color = tex;    
  color.a *= alpha;
  
  gl_FragColor = color;
}





          