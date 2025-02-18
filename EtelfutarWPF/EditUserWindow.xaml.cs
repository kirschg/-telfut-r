using EtelfutarWPF.DTOs;
using EtelfutarWPF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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
using System.Windows.Shapes;

namespace EtelfutarWPF
{
    /// <summary>
    /// Interaction logic for EditUserWindow.xaml
    /// </summary>
    public partial class EditUserWindow : Window
    {
        public static Felhasznalok selected_user = null;
        public EditUserWindow()
        {
            InitializeComponent();
            this.Icon = BitmapFrame.Create(new Uri("pack://application:,,,/gfx/icons/etelfutar.png"));
            tbx_felhasznalo_nev.Text = selected_user.FelhasznaloNev;
            tbx_teljes_nev.Text = selected_user.TeljesNev;
            tbx_email_cim.Text = selected_user.Email;
            tbx_varos_id.Text = selected_user.VarosId.ToString();
            tbx_lakcim.Text = selected_user.Lakcim;
            pbx_jelszo.Password = "";
            pbx_jelszo_ujra.Password = "";
        }
        private void Megse_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }
        private async void Modositas_Click(object sender, RoutedEventArgs e)
        {
            if (tbx_felhasznalo_nev.Text != "")
            {
                if (tbx_email_cim.Text != "")
                {
                    if (tbx_varos_id.Text != "" && int.TryParse(tbx_varos_id.Text, out int tbx_varos_id_int))
                    {
                        if (tbx_lakcim.Text != "")
                        {
                            if (pbx_jelszo.Password != "" && pbx_jelszo_ujra.Password != "")
                            {
                                if (pbx_jelszo.Password == pbx_jelszo_ujra.Password)
                                {
                                    //Ha minden adatot megadtunk
                                    string salt = MainWindow.GenerateSalt();
                                    string hashedPassword = MainWindow.CreateSHA256(pbx_jelszo.Password + salt);
                                    string doubleHashedPassword = MainWindow.CreateSHA256(hashedPassword);
                                    selected_user.FelhasznaloNev = tbx_felhasznalo_nev.Text;
                                    selected_user.Email = tbx_email_cim.Text;
                                    selected_user.Salt = salt;
                                    selected_user.TeljesNev = tbx_teljes_nev.Text;
                                    selected_user.Lakcim = tbx_lakcim.Text;
                                    selected_user.Hash = doubleHashedPassword;
                                    try
                                    {
                                        string json = JsonSerializer.Serialize(selected_user, JsonSerializerOptions.Default);
                                        MessageBox.Show(json);
                                        var body = new StringContent(json, Encoding.UTF8, "application/json");
                                        var result = await MainWindow.sharedClient.PutAsync("Felhasznalok/PutFelhasznaloAsync", body);
                                        if (result.IsSuccessStatusCode)
                                        {
                                            MessageBox.Show("Sikeres módosítás.");
                                        }
                                        else
                                        {
                                            MessageBox.Show(result.RequestMessage.ToString());
                                        }
                                    }
                                    catch (Exception ex)
                                    {
                                        MessageBox.Show(ex.Message);
                                    }
                                    Close();
                                }
                                else
                                {
                                    MessageBox.Show("A jelszavak nem egyeznek meg!");
                                }
                            }
                            else
                            {
                                MessageBox.Show("Nincs megadva jelszó!");
                            }
                        }
                        else
                        {
                            MessageBox.Show("Nincs megadva lakcím!");
                        }
                    }
                    else
                    {
                        MessageBox.Show("Nincs megadva városId!");
                    }
                }
                else
                {
                    MessageBox.Show("Nincs megadva email cím!");
                }
            }
            else
            {
                MessageBox.Show("Nincs megadva felhasználónév!");
            }
        }
    }
}
