package litvidan.elisaapp.ui


import android.annotation.SuppressLint
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.painterResource
import androidx.navigation.NavController
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import litvidan.elisaapp.R
import litvidan.elisaapp.ui.screens.mainScreen.MainScreen
import litvidan.elisaapp.ui.screens.secondScreen.SecondScreen
import litvidan.elisaapp.ui.screens.profileScreen.ProfileScreen

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun BottomNavigation(navController: NavHostController = rememberNavController()) {
    val items = listOf(
        BottomNavItem.Main,
        BottomNavItem.Second,
        BottomNavItem.Profile
    )

    Scaffold(
        bottomBar = {
            BottomNavigationBar(items, navController)
        }
    ) {
        NavHost(navController, startDestination = BottomNavItem.Main.route) {
            composable(BottomNavItem.Main.route) { MainScreen() }
            composable(BottomNavItem.Second.route) { SecondScreen() }
            composable(BottomNavItem.Profile.route) { ProfileScreen() }
        }
    }
}

@Composable
fun BottomNavigationBar(items: List<BottomNavItem>, navController: NavController) {
    NavigationBar {
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        val currentDestination = navBackStackEntry?.destination
        items.forEach { item ->
            NavigationBarItem(
                icon = { Icon(painterResource(id = item.icon), contentDescription = item.title) },
                label = { Text(text = item.title) },
                selected = currentDestination?.hierarchy?.any { it.route == item.route } == true,
                onClick = {
                    navController.navigate(item.route) {
                        popUpTo(navController.graph.findStartDestination().id) {
                            saveState = true
                        }
                        launchSingleTop = true
                        restoreState = true
                    }
                }
            )
        }
    }
}

sealed class BottomNavItem(val route: String, val title: String, val icon: Int) {
    object Main : BottomNavItem("main", "Главная", R.drawable.home)
    object Second : BottomNavItem("second", "История", R.drawable.history)
    object Profile : BottomNavItem("profile", "Настройки", R.drawable.profile)
}