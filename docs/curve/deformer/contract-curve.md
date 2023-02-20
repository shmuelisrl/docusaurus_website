---
sidebar_position: 3
title: Contract Curve
description: This is a trim curve node that preserves the topology, so it is "contracting" the curve instead of trimming it - which dose changes the topology. This is useful for animations when instancing, and it reduces flickering etc. 
tags:
  - Cuve
  - Deformer
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/contract_curve.png" alt="Smiley face" className="floatme"/>

### Contract Curve
This is a trim curve node that preserves the topology, so it is "contracting" the curve instead of trimming it - which dose changes the topology. This is useful for animations when instancing, and it reduces flickering etc. 

<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.
:::tip
Works best with non-cyclic curves, as well as poly curves [non-Bézier/ non-interpolated Topology]. It still supports cyclic curves (and kinda... Bézier), only that it will obviously make it non-cyclic in the contracting process.
:::
</div>

## Selection
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Spline_.  
Which splines are effected.


</div>

## Start
<div class="md-indent">

 _**Type -** Float, **Domain -** Spline_.  
Contraction amount / "Factor" from the start of the curve.

</div>

## End
<div class="md-indent">

 _**Type -** Float, **Domain -** Spline_.  
Contraction amount / "Factor" from the End of the curve of the curve.

</div>

:::info

If the [start](#start) and [end](#end) cross [for example the [start](#start) is above 0.5 and the [end](#end) is below 0.5] the spline inverts.

:::

## Fixed Normal
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
Takes the normals from the position along the curve that it was "trimmed" [contracted] to be at. - This is useful for consistent animation especially if you are meshing the curve.


</div>

## Fixed Radius
<div class="md-indent">

_**Type -** Boolean, **Domain -** Spline_.  
Takes the radius from the position along the curve that it was "trimmed" [contracted] to be at. (- not as useful as [fixed normal](#fixed-normal) in my opinion.)
</div>

## Spline Endpoint Offset
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
**Only when using Cyclic Curves** this input offsets where the spline will split when "trimmed" [contracted]. (It is offset stating by the Endpoint and goes in descending order through the indices.)


</div>
</div>

# Outputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
Outputs the deformed and/or altered topology geometry.
:::info

All indices stay the same **unless** you are using *cyclic* curves, then the endpoint/startpoint will split, thereby changing the indices; The spline indices on the other hand still stay the same

:::
</div>
</div>