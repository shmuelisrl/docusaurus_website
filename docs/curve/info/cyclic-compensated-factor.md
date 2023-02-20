---
sidebar_position: 5
title: Cyclic compensated Factor
description: This node gives you the proper spline factor for cyclic curves.
tags:
  - Cuve
  - Info
  - field
---
<!-- Node Image -->
<div>
<img  width="30%" src="/img/docs/cyclic_compensated_factor.png" alt="Smiley face" className="floatme"/>

### Cyclic compensated Factor
This node gives you the proper spline factor for cyclic curves.
   
<!-- Blank Space after imge+description -->
<img  width="100%" height="0%" src="/img/blank.png" alt="blank"/>  
</div>


# Outputs
<div class="md-indent">

## Angle
<div class="md-indent">

_**Type -** Float, **Domain -** Point_.  
A value along the curve from 0 to what ever the value should be at the endpoint compensating for cyclic curves; meaning if the curve is non-cyclic you'll get a value from 0 to 1, but if the curve is cyclic then it will evaluate what the proper factor should be if the value 1 would end up back at the start. - This is useful if you are tilting a curve and want it to line up at the start properly, or any other similar kind of situation.

:::danger Important

This node does not work properly for Bézier, catmull Rom, or NURBS curves.

:::
</div>

</div>