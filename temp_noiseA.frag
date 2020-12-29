#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random(float f){
    return fract(sin(f * 142.321) * 4e4);
}
float random(vec2 v2){
    float f = dot(v2, vec2(321.432,451.524));
    return fract(sin(f * 432.531) * 778.472);
}

float randomSerie(float x, float freq, float t){
    return step(0.8, random( floor(x * freq) - floor(t) ));
}

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    coord.x *= u_resolution.x / u_resolution.y;
    // coord *= 10.0;
    // coord = coord * 2.0 - 1.0;
    
    float cols = 2.0;
    float freq = random(floor(u_time)) + abs(atan(u_time)*0.1);
    float temp = abs(atan(u_time) * 0.1);
    float t = 60.0 + u_time * (1.0 - temp) * 30.0;

    if (fract(coord.y * cols * 0.5) < 0.5){
        t *= -1.0;
    }

    freq += random(floor(coord.y));

    float offset = 0.025;
    vec3 col = vec3(randomSerie(coord.x, 122.0, t));
    // col = vec3(t);
    gl_FragColor = vec4(col, 1.0);

}