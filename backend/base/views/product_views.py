from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..serializers import ProductSerializer
from ..models import Product


@api_view(["GET"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



