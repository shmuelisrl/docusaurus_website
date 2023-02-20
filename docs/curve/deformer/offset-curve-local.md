---
sidebar_position: 1
title: Offset Curve Local
description: This node offsets the curve in its local x,y,z (normal, tangent-normal, and tangent) axes.
tags:
  - Cuve
  - Deformer
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/offset_curve_local.png" alt="Smiley face" className="floatme"/>

 ### Offset Curve Local
This node offsets the curve in its local x,y,z (normal, tangent-normal, and tangent) axes.
  
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
(only real geometry is effected)
</div>

## Selection
<div class="md-indent">

_**Type -** Boolean, **Domain -** Point_.  
Which points will be effected
</div>

## Offset
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
What direction relative to the curve itself will it be offset. [X = Normal, Y = Tangent-Normal, Z = Tangent.]
</div>

</div>

# Outputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
The deformed geometry.
> All indices will stay the same.

</div>

</div>




















