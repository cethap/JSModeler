JSModeler
=========

JSModeler is a JavaScript framework to create and visualize 3D models.

Useful links:
<ul>
	<li><a href="http://kovacsv.github.com/JSModeler/documentation/tutorial/minimal.html">JSModeler Minimal</a> is a minimalist example on using the framework.</li>
	<li><a href="http://kovacsv.github.com/JSModeler/documentation/tutorial/tutorial.html">JSModeler Tutorial</a> shows instructions and examples on how to use the framework.</li>
	<li><a href="http://kovacsv.github.com/JSModeler/documentation/reference/generator.html">JSModeler Generator Documentation</a> shows the usage of the built-in generator functions.</li>
	<li>Example applications written with JSModeler:
		<ul>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/demo/demonstration.html">JSModeler Generator Demonstration</a> is a page which contains examples for generator functions.</li>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/demo/triangulation.html">JSModeler Triangulation Demonstration</a> is a page which demonstrates the built-in triangulation algorithm.</li>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/examples/legobuilder.html">Lego Builder</a> is an interactive lego builder application.</li>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/examples/tictactoe.html">3D Tic-Tac-Toe</a> is a Tic-Tac-Toe game with 3D interface.</li>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/examples/robot/robot.html">Robotic Arm</a> is a realtime robotic arm simulator.</li>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/examples/deform.html">Deform</a> is a realtime polygon soft selection tool.</li>
			<li><a href="http://kovacsv.github.com/JSModeler/documentation/examples/solids.html">Solid Body Viewer</a> is an example of using the SVG viewer.</li>
		</ul>
	</li>
</ul>

Main capabilities:
<ul>
	<li>Simple 3D model building manually or with generator functions.</li>
	<ul>
		<li>We can define our model with adding vertices and polygons manually.</li>
		<li>We can use built-in generator functions to create basic shapes.</li>
	</ul>
	<li>Built-in Three.js based model viewer with rotation and zoom functionality.</li>
	<li>Automatic conversion to Three.js geometry format.</li>
	<ul>
		<li>Convex and concave polygons are automatically triangulated during the conversion.</li>
		<li>Vertex normals automatically calculated for the curved polygons.</li>
	</ul>
	<li>Automatic exportation to STL and OBJ file format.</li>
	<li>Miscellaneous 2D and 3D geometry functions.</li>
	<ul>
		<li>Polygon triangulation for 2D and 3D polygons.</li>
		<li>Catmull-Clark subdivision for 3D bodies.</li>
		<li>Convex hull calculation for 2D and 3D point sets.</li>
	</ul>
</ul>
