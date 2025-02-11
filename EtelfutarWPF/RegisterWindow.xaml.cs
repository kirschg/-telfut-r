using EtelfutarWPF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
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
    /// Interaction logic for RegisterWindow.xaml
    /// </summary>
    public partial class RegisterWindow : Window
    {
        public RegisterWindow()
        {
            InitializeComponent();
        }

        private void Regisztracio_Click(object sender, RoutedEventArgs e)
        {
            if(tbx_felhasznalo_nev.Text != "")
            {
                if (tbx_email_cim.Text != "")
                {
                    if (tbx_varos_id.Text != "")
                    {
                        if (tbx_lakcim.Text != "")
                        {
                            if(pbx_jelszo.Password != "" && pbx_jelszo_ujra.Password != "")
                            {
                                if (pbx_jelszo.Password == pbx_jelszo_ujra.Password)
                                {
                                    //Ha minden adatot megadtunk
                                    string salt = MainWindow.GenerateSalt();
                                    string hashedPassword = MainWindow.CreateSHA256(pbx_jelszo.Password + salt);
                                    string doubleHashedPassword = MainWindow.CreateSHA256(hashedPassword);
                                    Felhasznalok ujFelhasznalo = new Felhasznalok()
                                    {
                                        FelhasznaloNev = tbx_felhasznalo_nev.Text,
                                        Email = tbx_email_cim.Text,
                                        Lakcim = tbx_lakcim.Text,
                                        VarosId = int.Parse(tbx_varos_id.Text),
                                        Hash = doubleHashedPassword,
                                        Salt = salt,
                                        Jogosultsag = 0,
                                    };
                                    var response = await client.PostAsync($"api/Registry/", new StringContent(ujFelhasznalo, Encoding.UTF8, "text/plain"));
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

        private void Megse_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
