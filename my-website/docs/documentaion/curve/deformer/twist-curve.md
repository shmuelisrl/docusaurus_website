---
sidebar_position: 2
title: Twist Curve
description: This node twists a curve like a spiral or a coil.
tags:
  - Cuve
  - Deformer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/twist_curve.png" alt="Smiley face" className="floatme"/>

 ### Twist Curve
  This node twists a curve like a spiral or a coil
  
<!-- Blank Space after imge+description -->
<img width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>


# Inputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.
:::tip 

  Make sure your curves have enough topology [control points] to be able to be twisted properly. - Most issue you will come across probably have something to do with this. - also only real topology is used to a Bézier curves and the similar might not have enough topology, so I recommend using a [resample curve node](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/curve/resample_curve.html) set to Evaluated (or whatever).

:::
   
</div>

## Selection
<div class="md-indent">

 _**Type -** Boolean, **Domain -** Spline_.  
 What points will be effected by this node. (All indices will stay the same.)
</div>

## Twist Mode
<div class="md-indent">

_**Type -** Integer, **Domain -** Spline_.  
Controls what behavior the [Twist](#twist) input has.
</div>
<div class="md-indent">

  0. **Factor -** Makes N rotations along a curve based on the [Twist](#twist) value - so if the [Twist](#twist) value is 5 would have 5 rotations along each curve. - This is useful if you are animating the curve and want it to keep a consistent number or rotations

  1. **Length -** Makes N rotations every meter along a curve based on the [Twist](#twist) value - so if the curve was 5 meters long and the [Twist](#twist) value was set to 2 you'd have 10 rotations along that curve. - This is useful for having an even distribution along a curve or multiple curves
  
  2. **Offset -** Rotates each point along the curve by an angle specified by the [Twist](#twist) value in radians. This is useful for phyllotaxis [by using 2.399...], or offset based things.
  
</div>

## Twist
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.
<Tabs>
  <TabItem value="1" label="Factor">
    Number of rotations per curve.
  </TabItem>
  <TabItem value="2" label="Length">
    Number of rotations per meter.
  </TabItem>
  <TabItem value="3" label="Offset">
    Angle each point is offset from another. ( - The rotation is relative from the previous point in the curve.)
  </TabItem>
</Tabs>


</div>

## Radius
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
How far away outwards from the curve to offset the spiral away.
</div>

</div>



# Outputs
<div class="md-indent">

## Curve
<div class="md-indent">

_**Type -** Geometry-Curve_.  
Outputs the deformed geometry.

</div>
</div>