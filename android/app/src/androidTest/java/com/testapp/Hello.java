import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;
import androidx.test.runner.AndroidJUnit4;

import com.testapp.MainActivity;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;
import static androidx.test.espresso.matcher.ViewMatchers.withContentDescription;
import static androidx.test.espresso.matcher.ViewMatchers.withText;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class Hello {

     @Rule
     public ActivityTestRule<MainActivity> activityRule =
             new ActivityTestRule<>(MainActivity.class);


    public void sleep(int amount) {
        try {
            Thread.sleep(amount);
        } catch (Exception e) {

        }
    }

    @Test
    public void listGoesOverTheFold() {
        sleep(5000);
        onView(withText("Hello world!")).check(matches(isDisplayed()));
    }


    @Test
    public void pressButton () {
        sleep(5000);
        onView(withText("Click here!")).check(matches(isDisplayed()));
        onView(withText("Click here!")).perform(click());


        sleep(15000);
    }
}