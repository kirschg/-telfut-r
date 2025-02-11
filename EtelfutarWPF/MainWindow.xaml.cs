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

        public static HttpClient sharedClient = new HttpClient()
        {
            BaseAddress = new Uri("http://localhost:5000")
        };
        public static int SaltLength = 64;
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Bejelentkezes_Click(object sender, RoutedEventArgs e)
        {
            LoginWindow loginWindow = new LoginWindow();
            loginWindow.client = sharedClient;
            token = null;
            loginWindow.ShowDialog();
            if(token is not null)
            {
                menu_felhasznalok.IsEnabled = true;
                menu_kijelentkezes.IsEnabled = true;
            }
            else
            {
                menu_felhasznalok.IsEnabled = false;
                menu_kijelentkezes.IsEnabled = false;
            }
        }

        private void Regisztracio_Click(object sender, RoutedEventArgs e)
        {
            RegisterWindow registerWindow = new RegisterWindow();
            registerWindow.ShowDialog();
        }

        private async void Felhasznalok_Click(object sender, RoutedEventArgs e)
        {
            List<Felhasznalok> felhasznalok = await sharedClient.GetFromJsonAsync<List<Felhasznalok>>("Felhasznalok/GetFelhasznalokAsync");
            dgr_felhasznalok.ItemsSource = felhasznalok;
        }

        private void Kijelentkezes_Click(object sender, RoutedEventArgs e)
        {
            
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

        private void Torles_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
