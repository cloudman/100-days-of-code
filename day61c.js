index.html <style type='text/sass'>
  $j: 1;
  @while $j < 11 {
.text-#{$j} { font-size: 5px * $j; }
$j: $j + 1;
}
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>
