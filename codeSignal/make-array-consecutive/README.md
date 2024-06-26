<div class="markdown -arial"><p>Ratiorg got <code>statues</code> of <em>different</em> sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by <code>1</code>. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>statues = [6, 2, 3, 8]</code>, the output should be<br>
<code>solution(statues) = 3</code>.</p>
<p>Ratiorg needs statues of sizes <code>4</code>, <code>5</code> and <code>7</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[memory limit] 1 GB</strong></p>
</li>
<li>
<p><strong>[input] array.integer statues</strong></p>
<p>An array of <em>distinct</em> non-negative integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ statues.length ≤ 10</code>,<br>
<code>0 ≤ statues[i] ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The minimal number of statues that need to be added to existing <code>statues</code> such that it contains every integer size from an interval <code>[L, R]</code> (for some <code>L, R</code>) and no other sizes.</p>
</li>
</ul>
</div>
