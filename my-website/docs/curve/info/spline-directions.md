---
sidebar_position: 4
title: Spline Directions
description: This node gives you the local x,y,z directions of a curve (normal, tangent-normal, and tangent).
tags:
  - Cuve
  - Info
  - field
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/spline_diractions.png" alt="Smiley face" className="floatme"/>

### Spline Directions
This node gives you the local x,y,z directions of a curve (normal, tangent-normal, and tangent).
   
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>


# Outputs
<div class="md-indent">

## X
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
Pointing away from the curve ([Normal](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/input/normal.html)).
</div>

## Y
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
Pointing away from the curve, but 90° from the [X](#x) (tangent-normal).
</div>

## Z
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
Pointing along the curve ([Tangent](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/curve_tangent.html)).
</div>

</div>