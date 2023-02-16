---
sidebar_position: 1
title: Spline Coordinates
description: This node gives the local Coordinates from your geometry to the inputted spline / splines.
tags:
  - Cuve
  - Utilities
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/spline_coordinates.png" alt="Smiley face" className="floatme"/>

 ### Spline Coordinates
This node gives the local Coordinates from your geometry to the inputted spline / splines.
  
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
The curve (/ splines) that you're sampling the [outputs](#outputs) from.
</div>
</div>

# Outputs
<div class="md-indent">

## Spline Coordinates
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
The local [object] coordinates relative to the [curve](#curve) as if the startpoint is (0,0,0) and conforms to the curve (along the Tangent is Z, along the Normal is X, and along Normal-Tangent is Y). For example if a point is 1 m away from the [curve](#curve) along the normal it will have an X of 1, if it is 1 m along the [curve](#curve) (it has a length of 1) it will have a Z of 1 etc.

</div>

## Radius
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
The radius of the points on the [curve](#curve) closest to points of whatever the output is plugged into.
</div>

## Spline Index
<div class="md-indent">

_**Type -** Integer, **Domain -** Point_.  
The spline index of the points on the [curve](#curve) closest to points of whatever the output is plugged into.
</div>

</div>