---
sidebar_position: 3
title: Fill Splines 2D
description: This node allows you to Fill your curves without combining curve when you don't want to.
tags:
  - Cuve
  - Generator
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/fill_splines_2d.png" alt="Smiley face" className="floatme"/>

 ### Fill Splines 2D  
This node allows you to Fill your curves without combining curve when you don't want to.
  
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

## Group Index
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Spline_.  
If you want to have some splines filled together by choice of group index _True_ (aka. turns on [Group Index](#group-index-1) ↓).
</div>

## Group Index
<div class="md-indent">

 _**Type -** Integer, **Domain -** Spline_.  
Input an integer ID that you want to have splines sharing the same number filled together.
</div>

</div>

# Outputs
<div class="md-indent">

## Mesh
<div class="md-indent">

_**Type -** Geometry-Mesh_.  
Outputs faces; fills each spline with a face.
>  Vertices indices are the same as curve points [evaluated](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/resample_curve.html#:~:text=Evaluated,for%20poly%20splines.). Faces indices, if all filled separately ([Group Index](#group-index) = False) are the same as spline index; If not, then the faces indices may differ.

</div>
</div>
