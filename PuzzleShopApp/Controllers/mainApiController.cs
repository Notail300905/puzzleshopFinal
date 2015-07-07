
using PuzzleShopApp.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Description;

namespace PuzzleShopApp.Controllers
{
    

    public class mainApiController : ApiController
    {
         private PuzzleShopEntities db = new PuzzleShopEntities();

        //Получаем новинки
      
         public IQueryable<ItemsTable> GetItemsTable()
         {
             List<int> x = new List<int>(); ;
             db.Configuration.ProxyCreationEnabled = false;
             List<ItemsTable> items = new List<ItemsTable>();
             List<ItemsTable> itemsdb = new List<ItemsTable>();
            foreach(var item in db.ItemsTables)
            {
                itemsdb.Add(item);
            }
             
             for (int i = db.ItemsTables.Count() - 1; i > db.ItemsTables.Count() - 9; i--)
             {
                 items.Add(itemsdb[i]);         
             }     
             return items.AsQueryable();
         }
        //Получаем список категории
        public IQueryable<Category> GetCategoryTable()
        {
            db.Configuration.ProxyCreationEnabled = false;

            return db.Categories.AsQueryable();
        }
        //Получаем список подкатегорий
        public IHttpActionResult GetSubCategoryTable(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Subcategory> subcategory = new List<Subcategory>();
            foreach (var item in db.Subcategories)
            {
                if (item.CategoryId == id)
                {
                    subcategory.Add(item);
                }
            }
            return Ok(subcategory);
        }

        [ResponseType(typeof(ItemsTable))]
        [HttpPost]
        public IHttpActionResult PostSubItems(Subcategory subName)
        {
            db.Configuration.ProxyCreationEnabled = false;
            int subId = 0;
     
            List<ItemsTable> subItems = new List<ItemsTable>();     
                subId = subName.Id;
            foreach (var item2 in db.ItemsTables)
            {
                if (item2.SubcategoryId == subId)
                {
                    subItems.Add(item2);
                }
            }
            return Ok(subItems);
        }
    }
}
