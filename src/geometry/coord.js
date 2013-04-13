JSM.Coord2D = function (x, y)
{
	this.x = x || 0.0;
	this.y = y || 0.0;
};

JSM.Coord2D.prototype =
{
	Set : function (x, y)
	{
		this.x = x || 0.0;
		this.y = y || 0.0;
	},
	
	ToString : function ()
	{
		return ('(' + this.x + ', ' + this.y + ')');
	},
	
	Clone : function ()
	{
		return new JSM.Coord2D (this.x, this.y);
	}
};

JSM.PolarCoord = function (radius, angle)
{
	this.radius = radius || 1.0;
	this.angle = angle || 0.0;
};

JSM.PolarCoord.prototype =
{
	Set : function (radius, angle)
	{
		this.radius = radius || 1.0;
		this.angle = angle || 0.0;
	},
	
	ToString : function ()
	{
		return ('(' + this.radius + ', ' + this.angle + ')');
	},
	
	Clone : function ()
	{
		return new JSM.PolarCoord (this.radius, this.angle);
	}
};

JSM.Coord = function (x, y, z)
{
	this.x = x || 0.0;
	this.y = y || 0.0;
	this.z = z || 0.0;
};

JSM.Coord.prototype =
{
	Set : function (x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	},
	
	ToString : function ()
	{
		return ('(' + this.x + ', ' + this.y + ', ' + this.z + ')');
	},
	
	Clone : function ()
	{
		return new JSM.Coord (this.x, this.y, this.z);
	}
};

JSM.Vector2D = JSM.Coord2D;
JSM.Vector = JSM.Coord;