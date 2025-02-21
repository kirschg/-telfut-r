using EtelfutarWPF.DTOs;
using EtelfutarWPF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace EtelfutarWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public static string token = null;
        public static int jogosultsag = -1;
        public static string client_address = "http://localhost:5000";
        public static List<Felhasznalok> felhasznalok2 = new List<Felhasznalok>();

        public static HttpClient sharedClient = new HttpClient()
        {
            BaseAddress = new Uri("http://localhost:5000")
        };
        public static int SaltLength = 64;
        public MainWindow()
        {
            InitializeComponent();
            this.Icon = BitmapFrame.Create(new Uri("pack://application:,,,/gfx/icons/etelfutar.png"));
            cbx_tablazatok.Items.Add("Felhasználók");
            cbx_tablazatok.SelectedIndex = -1;

        }

        private void Bejelentkezes_Click(object sender, RoutedEventArgs e)
        {
            LoginWindow loginWindow = new LoginWindow();
            loginWindow.client = sharedClient;
            token = null;
            loginWindow.ShowDialog();
            if(token is not null)
            {
                menu_kijelentkezes.IsEnabled = true;
                menu_bejelentkezes.IsEnabled = false;
                if (jogosultsag > 0)
                {
                    cbx_tablazatok.IsEnabled = true;
                }
            }
            else
            {
                cbx_tablazatok.IsEnabled = false;
                menu_kijelentkezes.IsEnabled = false;
                btn_torles.IsEnabled = false;
                btn_modositas.IsEnabled = false;
                dgr_adatok.ItemsSource = null;
                jogosultsag = -1;
            }
        }

        private void Regisztracio_Click(object sender, RoutedEventArgs e)
        {
            RegisterWindow registerWindow = new RegisterWindow();
            registerWindow.client = sharedClient;
            registerWindow.ShowDialog();
        }

        private async void Kijelentkezes_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                string json = JsonSerializer.Serialize(token, JsonSerializerOptions.Default);
                MessageBox.Show(json);
                var body = new StringContent(json, Encoding.UTF8, "application/json");
                var result = await sharedClient.PostAsync("api/Logout", body);
                MessageBox.Show("Sikeres kijelentkezés.");
                cbx_tablazatok.IsEnabled = false;
                menu_kijelentkezes.IsEnabled = false;
                dgr_adatok.ItemsSource = null;
                token = null;
                jogosultsag = -1;
                btn_torles.IsEnabled = false;
                btn_modositas.IsEnabled = false;
                menu_bejelentkezes.IsEnabled = true;
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        private async void Beallitasok_Click(object sender, RoutedEventArgs e)
        {
            SettingsWindow settingsWindow = new SettingsWindow();
            settingsWindow.ShowDialog();
        }
        public static string GenerateSalt()
        {
            Random random = new Random();
            string karakterek = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            string salt = "";
            for (int i = 0; i < SaltLength; i++)
            {
                salt += karakterek[random.Next(karakterek.Length)];
            }
            return salt;
        }
        public static string CreateSHA256(string input)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] data = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                var sBuilder = new StringBuilder();
                for (int i = 0; i < data.Length; i++)
                {
                    sBuilder.Append(data[i].ToString("x2"));
                }
                return sBuilder.ToString();
            }
        }

        private async void Torles_Click(object sender, RoutedEventArgs e)
        {
            if (dgr_adatok.SelectedItem is not null)
            {
                felhasznalok2.Remove((Felhasznalok)dgr_adatok.SelectedItem);
                //felhasználó törlése az adatbázisból
                try
                {
                    //string json = JsonSerializer.Serialize(((Felhasznalok)dgr_felhasznalok.SelectedItem).Id, JsonSerializerOptions.Default);
                    //MessageBox.Show(json);

                    //var body = new StringContent(json, Encoding.UTF8, "application/json");
                    var result = await sharedClient.DeleteAsync($"{sharedClient.BaseAddress}Felhasznalok/DeleteFelhasznaloAsync?id={((Felhasznalok)dgr_adatok.SelectedItem).Id}");
                    if (result.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Sikeres törlés.");
                    }
                    else
                    {
                        
                        MessageBox.Show($"Error: {result}\n"+ $"{sharedClient.BaseAddress}Felhasznalok/DeleteFelhasznaloAsync?id={((Felhasznalok)dgr_adatok.SelectedItem).Id}");
                    }
                }
                catch(Exception ex)
                {
                    MessageBox.Show(ex.Message);
                }
                //datagrid frissítése
                dgr_adatok.ItemsSource = null;
                dgr_adatok.ItemsSource = felhasznalok2;
            }
            else
            {
                MessageBox.Show("Nincs kiválasztva elem!");
            }
        }
        private async void Modositas_Click(object sender, RoutedEventArgs e)
        {
            if (dgr_adatok.SelectedItem is not null)
            {
                EditUserWindow.selected_user = (Felhasznalok)dgr_adatok.SelectedItem;
                EditUserWindow editUserWindow = new EditUserWindow();
                editUserWindow.ShowDialog();
                List<Felhasznalok> felhasznalok = await sharedClient.GetFromJsonAsync<List<Felhasznalok>>("Felhasznalok/GetFelhasznalokAsync");
                felhasznalok2 = felhasznalok;
                dgr_adatok.ItemsSource = null;
                dgr_adatok.ItemsSource = felhasznalok2;
            }
            else
            {
                MessageBox.Show("Nincs kiválasztva elem!");
            }
        }

        private async void cbx_tablazatok_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (cbx_tablazatok.SelectedItem.ToString() == "Felhasználók")
            {
                try
                {
                    List<Felhasznalok> felhasznalok = await sharedClient.GetFromJsonAsync<List<Felhasznalok>>("Felhasznalok/GetFelhasznalokAsync");
                    felhasznalok2 = felhasznalok;
                    dgr_adatok.ItemsSource = felhasznalok;
                    if (jogosultsag > 1)
                    {
                        btn_torles.IsEnabled = true;
                        btn_modositas.IsEnabled = true;
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Sikertelen betöltés!");
                }
            }
        }
    }
}
