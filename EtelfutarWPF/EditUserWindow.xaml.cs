using EtelfutarWPF.DTOs;
using EtelfutarWPF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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
    /// Interaction logic for EditUserWindow.xaml
    /// </summary>
    public partial class EditUserWindow : Window
    {
        public static RegistryFelhasznalokDTO selected_user = null;
        public EditUserWindow()
        {
            InitializeComponent();
            tbx_felhasznalo_nev.Text = selected_user.FelhasznaloNev;
            tbx_teljes_nev.Text = selected_user.TeljesNev;
            tbx_email_cim.Text = selected_user.Email;
            tbx_varos_id.Text = selected_user.VarosId.ToString();
            tbx_lakcim.Text = selected_user.LakCim;
            pbx_jelszo.Password = "";
            pbx_jelszo_ujra.Password = "";
        }
        private void Megse_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }
        private void Modositas_Click(object sender, RoutedEventArgs e)
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

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
