# PriceScope AI API Documentation

## API Overview
Base URL: `https://api.pricescope.ai/v1`
Authentication: Bearer Token
API Version: 1.0.0

## Authentication
```bash
# All API requests require an Authorization header
Authorization: Bearer your_api_key
```

## Rate Limits
- Free tier: 1000 requests/hour
- Basic tier: 5000 requests/hour
- Standard tier: 25000 requests/hour
- Premium tier: Unlimited

## Endpoints

### Price Optimization

#### Get Optimized Price
```http
GET /prices/optimize
```

Parameters:
```json
{
  "productId": "string",
  "basePrice": "number",
  "currency": "string",
  "region": "string",
  "userSegment": "string?",
  "customRules": "object?"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "optimizedPrice": 29.99,
    "currency": "USD",
    "confidence": 0.95,
    "factors": {
      "regionalDemand": 0.8,
      "seasonality": 0.6,
      "competitorPricing": 0.7
    },
    "recommendation": {
      "price": 29.99,
      "reasoning": "Based on high regional demand and seasonal factors"
    }
  }
}
```

#### Batch Price Optimization
```http
POST /prices/optimize/batch
```

Request:
```json
{
  "products": [
    {
      "productId": "string",
      "basePrice": "number",
      "currency": "string"
    }
  ],
  "region": "string",
  "customRules": "object?"
}
```

### Cultural Intelligence

#### Get Regional Events
```http
GET /cultural/events
```

Parameters:
```json
{
  "region": "string",
  "startDate": "ISO-8601",
  "endDate": "ISO-8601",
  "types": ["holiday", "festival", "custom"]
}
```

Response:
```json
{
  "success": true,
  "data": {
    "events": [
      {
        "id": "evt_123",
        "name": "Lunar New Year",
        "date": "2024-02-10",
        "type": "holiday",
        "region": "APAC",
        "impact": {
          "expectedSales": "+45%",
          "recommendedAction": "Increase marketing spend"
        }
      }
    ]
  }
}
```

### Fraud Prevention

#### Check Transaction Risk
```http
POST /fraud/check
```

Request:
```json
{
  "transactionId": "string",
  "userId": "string",
  "amount": "number",
  "currency": "string",
  "deviceFingerprint": "string",
  "ipAddress": "string"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "riskScore": 0.12,
    "flags": [],
    "recommendation": "approve",
    "details": {
      "vpnDetected": false,
      "deviceTrust": "high",
      "behaviorScore": 0.95
    }
  }
}
```

## Webhooks

### Configure Webhook
```http
POST /webhooks
```

Request:
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["price.updated", "fraud.detected", "event.triggered"],
  "secret": "string"
}
```

### Webhook Events
```javascript
// Example webhook payload
{
  "event": "price.updated",
  "data": {
    "productId": "prod_123",
    "oldPrice": 29.99,
    "newPrice": 34.99,
    "reason": "High demand detected",
    "timestamp": "2024-03-15T14:30:00Z"
  }
}
```

## Error Handling

### Error Codes
```json
{
  "400": "Bad Request - Invalid parameters",
  "401": "Unauthorized - Invalid API key",
  "403": "Forbidden - Insufficient permissions",
  "404": "Not Found - Resource doesn't exist",
  "429": "Too Many Requests - Rate limit exceeded",
  "500": "Internal Server Error"
}
```

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Invalid region specified",
    "details": {
      "field": "region",
      "value": "INVALID",
      "allowed": ["NA", "EU", "APAC"]
    }
  }
}
```

## SDK Support
- JavaScript/TypeScript
- Python
- Ruby
- PHP
- Java
- Go

## Code Examples

### JavaScript
```javascript
const PriceScopeAI = require('pricescope-ai');

const client = new PriceScopeAI('your_api_key');

// Get optimized price
async function getOptimizedPrice() {
  try {
    const result = await client.prices.optimize({
      productId: 'prod_123',
      basePrice: 29.99,
      region: 'NA'
    });
    return result.data.optimizedPrice;
  } catch (error) {
    console.error('Optimization failed:', error);
  }
}
```

### Python
```python
from pricescope_ai import PriceScopeAI

client = PriceScopeAI('your_api_key')

# Check fraud risk
def check_risk(transaction_id):
    try:
        result = client.fraud.check({
            'transactionId': transaction_id,
            'amount': 99.99,
            'currency': 'USD'
        })
        return result.data.risk_score
    except Exception as e:
        print(f"Risk check failed: {e}")
``` 