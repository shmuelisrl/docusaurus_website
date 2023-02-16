---
sidebar_position: 2
title: Fill Splines 3D
description: This node allows you to fill curves in 3D space.
tags:
  - Cuve
  - Generator
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/fill_splines_3d.png" alt="Smiley face" className="floatme"/>

 ### Fill Splines 3D  
This node allows you to fill curves in 3D space.
  
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
The curves that will be filled.
</div>
</div>

# Outputs
<div class="md-indent">

## Mesh
<div class="md-indent">

_**Type -** Geometry-Mesh_.  
Outputs faces; fills each spline with a face.
> Vertices indices are the same as curve points [evaluated](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/resample_curve.html#:~:text=Evaluated,for%20poly%20splines.). Faces indices are the same as spline index.

</div>
</div>
