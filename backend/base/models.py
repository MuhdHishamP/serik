from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    new_price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    old_price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    # rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    # numReviews = models.IntegerField(default=0, null=True, blank=True)
    # countInStock = models.IntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return self.name
