package litvidan.elisaapp
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.runtime.collectAsState
import litvidan.elisaapp.ui.BottomNavigation
import litvidan.elisaapp.ui.theme.ElisaAppTheme

class MainActivity : ComponentActivity() {
    private val themeViewModel: ThemeViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ElisaAppTheme(darkTheme = themeViewModel.isDarkTheme.collectAsState().value) {
                BottomNavigation()
            }
        }
    }
}