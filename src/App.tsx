import './App.css';

function App() {
	return (
		<>
			<header>
				<h1>Code Interview Hell</h1>
			</header>
			<main>
				<section>
					<h2>Why does this site exist?</h2>
					<p>
						Coding interviews are tough. You might think that knowing the
						language well, coming up with a good solution to the problem, and
						successfully accounting for edge cases is enough to do well in an
						interview. In my experience, it isn't.
					</p>

					<p>
						You will need to demonstrate all of those things, but unlike real
						life, you will have to do them 1) as quickly as humanly possible, 2)
						while successfully handling endless distractions, and 3) managing a
						much higher cognitive load. Let's talk about each of these
						individually.
					</p>

					<section>
						<h3>Time</h3>
						<p>
							Though the interviewer(s) will likely tell you that the quality of
							the solution is the most important thing, there is another major
							factor that will be considered - time. Live interviews are always
							timed, and if you're lucky enough to get a take-home project
							instead, it is likely to include completing problems on a
							third-party platform that will time you. For a custom project,
							your Github commits will be checked after the fact to determine
							how much time elapsed from first to last. Why is time given so
							much weight? My guess is that it is easy to measure, and in theory
							at least, objective. So unfortunately, being capable is not enough
							- you also have to be fast*. In an interview scenario, you can't
							spare the time to look up the optional arguments to the map
							function, even if the interviewers will let you (and doing so will
							add to your cognitive load, discussed in the third section). If
							sorting an array of numbers in descending order is one piece of
							solving the problem you are given, you need to be able to do it{' '}
							<em>automatically</em> and <em>without thinking</em>, from muscle
							memory, like an elite athlete. How do you achieve that sort of
							speed? You'll need to build <em>fluency</em> with the building
							blocks of problems. This means daily drills. With daily practice,
							the exercises on this site will help you build that fluency by
							drilling the building blocks, and allowing you to set and reach
							speed goals for each block.
						</p>
					</section>

					<section>
						<h3>Distractions</h3>
						<h4>Talking</h4>
						<p>
							As I went through my first live coding interview, I found that I
							hadn't anticipated how distracting it would be to have three
							people on a video call talking throughout the exercise. I'm used
							to working remotely, and alone, and silence helps me concentrate.
							Though the task was tricky, most if not all of it was within my
							ability. However, my mind unexpectedly went blank at times, I
							forgot basic syntax, and made silly errors I normally wouldn't. I
							choked. Obviously, this cost me the job, in addition to being
							truly humiliating. In the moment, I thought these things happened
							because I was nervous, but as I reflected on it afterward, I
							realized that it was actually because my concentration was being
							broken over and over again, and{' '}
							<em>I hadn't trained for that at all.</em>
						</p>

						<p>
							Interviewers, trying to "help", will point out that you mispelled
							"fucntion" the instant that you type it, or that you need an extra
							curly brace on line 39 and things like that. Things you would have
							noticed and fixed a second later anyway. For me, every time this
							happened, it interrupted the crucial problem-solving thinking I
							had in progress, and made it that much harder to get back to where
							I was mentally before the comment was made. There is an inherent
							social pressure to acknowledge every comment in a group setting,
							but when you do respond, your cognitive focus must shift away from
							the coding task and move to forming a verbal response.
						</p>

						<p>
							Why do people feel the need to talk so much in a situation like
							this? They may truly be curious about a choice you are making, but
							the basic human wiring that we all share makes just{' '}
							<a href="https://www.thestar.com/life/health_wellness/2011/04/27/why_those_awkward_silences_make_you_anxious.html">
								4 seconds of silence in a group setting uncomfortable
							</a>
							. This social conditioning, which they may not even be aware of,
							causes interviewers to fill those silences with something -
							anything. Even if they're a bit quieter on the syntax side,
							they'll still ask why you chose to use this or that method, or why
							you did any number of things. So you'll need to be prepared to
							narrate what you're doing, and expect and handle the many
							interruptions gracefully and without your thinking being derailed.
						</p>
					</section>

					<section>
						<h4>You could do it if no one was watching!</h4>
						<p>
							As humans, we are all subject to an unfortuate phenomenon: our
							performance, even on simple tasks, worsens when we are observed by
							others. It's not just you!{' '}
							<a href="https://www.google.com/books/edition/_/QrCENRx6klUC?hl=en&gbpv=1&bsq=video%20games">
								Researchers in one study
							</a>{' '}
							secretly observed young people playing video games in an arcade.
							They recorded each player's scores, so they knew how well the
							player could play the game in general. Then, they approached the
							players and asked each one to play another round of the game they
							had just finished, and try to get the highest score they could.
							The only difference was that the researcher would watch them play
							this time. On average, the players' scores were 25% lower when
							they were observed.
						</p>

						<p>
							If this news wasn't bad enough, research also shows that as the
							importance of doing well rises, the likelihood of choking
							increases. If you are out of work, landing a new job is critical,
							because your very survival depends on it. Thus the interview
							becomes a do-or-die experience, and you feel like your entire life
							is on the line.
						</p>
					</section>

					<section>
						<h4>As the clock ticks...</h4>
						<p>
							Time pressure occurs when a person has to complete a task within a
							time limit. Numerous studies indicate that time pressure degrades
							indivdual performance - this is because when time is restricted,
							people TBD FINISH THIS SECTION!!!!
						</p>
					</section>

					<section>
						<h2>So how does one build these abilities?</h2>
						<p>
							There are lots of superb resources out there that you can use to
							prepare for coding interviews (Leetcode, etc) and you should
							absolutely spend as much time there as you can. The problem with
							those tools (as I see it) is twofold:
						</p>
						<ul>
							<li>
								Other than providing a timer, they do not replicate the pressure
								and distractions present during an actual interview.
							</li>
							<li>
								They don't break problems down into individual building blocks -
								they assume you are already fluent (good for you if you already
								are).
							</li>
						</ul>
					</section>
				</section>
			</main>
		</>
	);
}

export default App;
