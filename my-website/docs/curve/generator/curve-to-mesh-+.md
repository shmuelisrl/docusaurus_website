---
sidebar_position: 1
title: Curve to Mesh +
description: Adds proper uv's, even thickness, and spline coordinates to "curve to mesh" node.
tags:
  - Cuve
  - Generator
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/curve_to_mesh_+.png" alt="Smiley face" className="floatme"/>

 ### Curve to Mesh + 
This node expands the functionality of the regular [curve to mesh](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/curve_to_mesh.html) node, by adding proper uv's, even thickness, and extras like [spline coordinates](/docs/curve/utilities/spline-coordinates).
  
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>

# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.
</div>

## Curve Profile
<div class="md-indent">

_**Type -** Geometry-Curve_.
A profile curve you can use that extrudes along the [curve](#curve), just like the regular [curve to mesh node's profile](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/curve_to_mesh.html#:~:text=components%20are%20ignored.-,Profile%20Curve,Otherwise%20the%20generated%20mesh%20will%20just%20be%20a%20chain%20of%20edges.,-Fill%20Caps)
</div>

## Fill Caps
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Static_.  
Fills / adds caps to the ends of the non-cyclic generated mesh's opened ends ([same as...](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/curve_to_mesh.html#:~:text=Fill%20Caps,to%20existing%20edges.))
</div>

## Even Thickness
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Spline_. 

 When **False** will offset the [profile curve](#curve-profile) an even distance from the points (normal).  

 When **True** will preserved The thickness of [profile curve](#curve-profile) along the curve by keeping the source profile spline perpendicular to the main spline segments and by shearing it at the curve elbows in order to create a miter joint between segments.  


|False|True|
|:-:|:-:|
|![False](/img/docs/examples-curves/curve_to_mesh_even_thickness_false.png)|![True](/img/docs/examples-curves/curve_to_mesh_even_thickness_true.png)| 

</div>
</div>

# Outputs
<div class="md-indent">

## Mesh
<div class="md-indent">

_**Type -** Geometry-Mesh_.  
Outputs the Generated geometry.
> Indices will be new because there is more geometry, but they will be ordered. `Y * length(X) + X = Index.` when [spline parameter - index](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/spline_parameter.html#:~:text=of%20the%20spline.-,Index,%2C%20which%20also%20counts%20the%20control%20points%20in%20all%20previous%20splines.,-Examples) of [curve](#curve) is Y, and of [curve profile](#curve-profile) is X. 'length(X)' is the [curve profile](#curve-profile)'s evaluated point count.

</div>

## UV Map
<div class="md-indent">

_**Type -** Vector, **Domain -** Face Corner_.  
A [UV Map](https://en.wikipedia.org/wiki/UV_mapping) with the [curve profile](#curve-profile) as X, and the [curve](#curve) as Y.
</div>

## Spline Coordinates
<div class="md-indent">

_**Type -** Vector, **Domain -** Point_.  
The local spline [object] coordinates as if the startpoint is (0,0,0) and conforms to the curve (along the Tangent is Z, along the Normal is X, and along Normal-Tangent is Y). For example if a point is 1 m away from the curve along the normal it will have an X of 1, if it is 1 m along the curve (it has a length of 1) it will have a Z of 1 etc.

:::info

This output is live, meaning it will take into account future changes to the topology (relatively) to keep the mapping accurate. If you don't want it live, just capture it.

:::
</div>


</div>