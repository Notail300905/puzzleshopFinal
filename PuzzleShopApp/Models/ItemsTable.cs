//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PuzzleShopApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ItemsTable
    {
        public int Id { get; set; }
        public int SubcategoryId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double Discount_Price { get; set; }
        public double Whoresale_Price { get; set; }
        public string Discription { get; set; }
        public string Foto { get; set; }
        public string Foto_2 { get; set; }
    
        public virtual Subcategory Subcategory { get; set; }
    }
}
