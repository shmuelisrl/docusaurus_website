---
sidebar_position: 1
title: Spline Info
description: This node gives you some information about splines.
tags:
  - Cuve
  - Info
  - field
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/spline_info.png" alt="Smiley face" className="floatme"/>

### Spline Info
This node gives you some information about splines which will come in useful for many things.
   
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>


# Outputs
<div class="md-indent">

## Spline Count
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
The total number of splines [of whatever it's plugged into, as that is how fields work and stands true for all outputs].
</div>

## Spline Index
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
The splines index.
</div>

## Evaluated Point Count
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
The Evaluated point count per spline; meaning the point-count including the imaginary topology that becomes real when [resampled _Evaluated_.](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/resample_curve.html#:~:text=Evaluated,for%20poly%20splines.)
</div>

## Center Mass
<div class="md-indent">

_**Type -** Vector, **Domain -** Spline_.  
The position as the center mass of each spline (the average position off all points).
</div>

## Center Spline
<div class="md-indent">

_**Type -** Vector, **Domain -** Spline_.  
The position as the center of each spline. - This point will always be along the curve (for example, to rotate a curve around the middle), as a posed to [Canter Mass](#center-mass) which usually isn't.
</div>

</div>